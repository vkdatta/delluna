export const name="webcam-slash-duotone";
export const id="dl_c7bc1df8a25baa699999";
export const url=new URL("../icons/webcam-slash-duotone.svg?v=4eb957a7b8facd8c890504101f161849dedf0137a6eb9e18fb5000d5bbbc80fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
