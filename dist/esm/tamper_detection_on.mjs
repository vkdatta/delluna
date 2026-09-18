export const name="tamper_detection_on";
export const id="dl_e75a0440b4944ad58aab";
export const url=new URL("../icons/tamper_detection_on.svg?v=71ea2ce4b8a04fcb5330a59dc6ac86c26408d9032bfbed55cbc51dc23149efbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
