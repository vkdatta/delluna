export const name="hourglass-simple-duotone";
export const id="dl_bf59dcb905534aa29ef4";
export const url=new URL("../icons/hourglass-simple-duotone.svg?v=2b0dfbe2b561bc12406899c88d1e3e4bb27c4365b54c920c06059da3f9aebba5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
