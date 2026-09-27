export const name="check-square-offset-light";
export const id="dl_df9195e087e6489cae9f";
export const url=new URL("../icons/check-square-offset-light.svg?v=d94887b50e26f29ca5ebe07b46586b8b1a03a9f7036587bd10afba182830d8b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
