export const name="hourglass-simple-duotone";
export const id="dl_bf59dcb905534aa29ef4";
export const url=new URL("../icons/hourglass-simple-duotone.svg?v=51cc0d03edd38094826bf13189f7a416646b4dd85ebe9cd428b62765b695abfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
