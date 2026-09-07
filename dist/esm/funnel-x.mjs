export const name="funnel-x";
export const id="dl_c4b09531350b4d3b87ef";
export const url=new URL("../icons/funnel-x.svg?v=767680fb56c371d1534dd715c6b7a85e5a6a6e44e143a1db4bb7316115ee38d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
