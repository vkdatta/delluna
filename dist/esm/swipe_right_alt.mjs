export const name="swipe_right_alt";
export const id="dl_31be5a35fdbce6d5af7f";
export const url=new URL("../icons/swipe_right_alt.svg?v=377fc76cf9d1e150c919274db42455aa0a630afe13c9dae758d9168d532de5cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
