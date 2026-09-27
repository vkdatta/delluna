export const name="not-equals-fill";
export const id="dl_ecd2578f601c4e36b0c8";
export const url=new URL("../icons/not-equals-fill.svg?v=29813d776a7bbc1ccd12ea19431fc8bdbdccdfc937b39d32c6cb0d9ab632bc5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
