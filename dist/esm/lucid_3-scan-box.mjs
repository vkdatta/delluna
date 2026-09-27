export const name="lucid_3-scan-box";
export const id="dl_8d651e66c35c4cd18929";
export const url=new URL("../icons/lucid_3-scan-box.svg?v=50a31a48ede487fcf0e009e95870e47d46b5fe502cd32f45f6f514612c078d17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
