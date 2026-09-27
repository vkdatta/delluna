export const name="number-circle-five";
export const id="dl_cce035ce9a5a4647bbe1";
export const url=new URL("../icons/number-circle-five.svg?v=11d83a4d4b51fd6f2693a99f49555d7c310d10bc64e274e000fb6a343af38911",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
