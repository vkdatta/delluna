export const name="receipt-thin";
export const id="dl_61814b69cb5147bcbbea";
export const url=new URL("../icons/receipt-thin.svg?v=700f0c5cc5f3c458d0c43a43f95d7b108a85c832dd8ecdc05a8c2083b501acf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
