export const name="lucid_1-car";
export const id="dl_86a311e777034361bd5b";
export const url=new URL("../icons/lucid_1-car.svg?v=3a8a6e69796f13c66119e2fb8b92911c9ba1c077a0bd87d263f3e42e89eaa33b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
