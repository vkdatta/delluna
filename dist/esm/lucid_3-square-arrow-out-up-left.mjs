export const name="lucid_3-square-arrow-out-up-left";
export const id="dl_98205c7b82044495b083";
export const url=new URL("../icons/lucid_3-square-arrow-out-up-left.svg?v=6c66b829d65e240243aed3dd2e194dd2af1b570e17a4cbd3253752e79d791b10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
