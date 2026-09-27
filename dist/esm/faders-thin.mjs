export const name="faders-thin";
export const id="dl_543ce05a87f543b2baaa";
export const url=new URL("../icons/faders-thin.svg?v=f403185508a1f22f463c45ce22110ed6a67316b021125ed3e0430f4286fa85cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
