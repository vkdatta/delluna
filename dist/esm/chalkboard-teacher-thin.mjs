export const name="chalkboard-teacher-thin";
export const id="dl_98541d0999ee4903bc5c";
export const url=new URL("../icons/chalkboard-teacher-thin.svg?v=abd9651e2f1e4554a0b1a3db5a6ccf7a3b6aa8abeeb294e3870b1eb773d3bc5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
