export const name="number-nine-bold";
export const id="dl_547104ff665440fb8d35";
export const url=new URL("../icons/number-nine-bold.svg?v=3aba395b4667abbb03b77982ce9b78f73d2a16ed4323eec5b97e594b71d1d5a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
