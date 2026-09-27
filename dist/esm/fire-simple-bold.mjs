export const name="fire-simple-bold";
export const id="dl_af179ead28f04c3995f7";
export const url=new URL("../icons/fire-simple-bold.svg?v=1cc2b321a45ffb56e95284ae8806872f7b653de1a510d867823fd5f6bd07a9de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
