export const name="cricket";
export const id="dl_564c806fd0f149768dd2";
export const url=new URL("../icons/cricket.svg?v=ba48b77a27be918b5e2c3586243824205e72761b1b24c86ff4b2917844941c1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
