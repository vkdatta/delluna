export const name="keep";
export const id="dl_36b5d15d3b250223e4f9";
export const url=new URL("../icons/keep.svg?v=b75fb0a5a98707ea207e094a7ea202cd61822de04151ed53e3392989f70c9446",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
