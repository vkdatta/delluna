export const name="brackets-round-duotone";
export const id="dl_fbf22018688648318ca5";
export const url=new URL("../icons/brackets-round-duotone.svg?v=1b7952cb1102a76558d75aeaf5c517faeb601d43d4a94ea08881064d61bde95b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
