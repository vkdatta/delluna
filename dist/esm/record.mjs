export const name="record";
export const id="dl_dbbb89ceda224bd7ae43";
export const url=new URL("../icons/record.svg?v=a2910f904f442802c018003a6a43b5fa9fc280077d7a6555e5798a991ca0ba9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
