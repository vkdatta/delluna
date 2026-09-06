export const name="file-css-thin";
export const id="dl_cd1d03a2c4b042ebaac4";
export const url=new URL("../icons/file-css-thin.svg?v=e5801300982f86107e45958d7f9541738683b004ff923d824c248fbe99a5e40e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
