export const name="file-rs-thin";
export const id="dl_df8674f107de44eb922c";
export const url=new URL("../icons/file-rs-thin.svg?v=37e7c073deaae5742ba1d30c295517020be8888feb1d016e8ed7e8c4622d3487",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
