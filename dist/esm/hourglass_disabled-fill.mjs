export const name="hourglass_disabled-fill";
export const id="dl_7e24fd1d66dff381cf13";
export const url=new URL("../icons/hourglass_disabled-fill.svg?v=ecf49a783a86d066f6e166bfc74a72de94e9b98196b1b7ac20ae97a89ab26da5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
