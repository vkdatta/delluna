export const name="smart_display-fill";
export const id="dl_4fc4e5ea2e5b9de43efd";
export const url=new URL("../icons/smart_display-fill.svg?v=405583975fb4d85c80224cbf499ced8f10404bf8f25e7fc97b3d7dea6cd48bd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
