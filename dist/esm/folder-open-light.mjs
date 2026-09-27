export const name="folder-open-light";
export const id="dl_43e8cf7b275047db8ad0";
export const url=new URL("../icons/folder-open-light.svg?v=9dcdfe666d8e6c217de6e92c89187e2af23296be6b990076818ee14d5a8daf59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
