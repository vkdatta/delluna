export const name="barbell-thin";
export const id="dl_2ae8dcec4f4b42a5a8f1";
export const url=new URL("../icons/barbell-thin.svg?v=77070b0cdc751212f37f38c04e2f3fd7041a8832174b16d89a18fb3071413977",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
