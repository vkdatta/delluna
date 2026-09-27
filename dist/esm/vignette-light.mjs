export const name="vignette-light";
export const id="dl_267335b7430e6e285250";
export const url=new URL("../icons/vignette-light.svg?v=4cd62bc791a281b5a817f5ed0724a6f468cd5486a7f55a27ea1853b6b9a32777",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
