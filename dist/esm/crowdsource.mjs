export const name="crowdsource";
export const id="dl_db955eb0e7732636ae60";
export const url=new URL("../icons/crowdsource.svg?v=694f5bdf940e2b9299a9bfb2c41f4af0357341739cfb0fb24a37e4d0fb2c43f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
