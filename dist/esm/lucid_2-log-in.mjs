export const name="lucid_2-log-in";
export const id="dl_a4d5a378c19640689165";
export const url=new URL("../icons/lucid_2-log-in.svg?v=c0beb423ef05b666b80a32c1113bbe7c6ebbae3d8187ee066be8e107813f973c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
