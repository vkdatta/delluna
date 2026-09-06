export const name="dots-six-vertical";
export const id="dl_d6fda55d101d4ad68e12";
export const url=new URL("../icons/dots-six-vertical.svg?v=01e0c8e778cec9c1c0ff5c2e4aaadc5808a8d1dec0db8b9a51bcd5c5e9c8dcae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
