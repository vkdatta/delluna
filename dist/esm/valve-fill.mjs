export const name="valve-fill";
export const id="dl_d681d8b82a485be48e51";
export const url=new URL("../icons/valve-fill.svg?v=808c376f5d25da527e89b10e20fccf0b83f6d99b83fb47b1017e9c34d83cb274",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
