export const name="4k_plus";
export const id="dl_1eca8045c7835f1df377";
export const url=new URL("../icons/4k_plus.svg?v=aa6b8fa291d61dd4ea3de2e0ecf1844bd1cb046f889b6fea7aab1ab4a60a23d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
