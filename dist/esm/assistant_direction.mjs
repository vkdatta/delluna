export const name="assistant_direction";
export const id="dl_1de45e2ef0fe4acb62b8";
export const url=new URL("../icons/assistant_direction.svg?v=4a62fdf0babe2f363265988594c0dba0f391f030154c54434d7c99ba4c19828d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
