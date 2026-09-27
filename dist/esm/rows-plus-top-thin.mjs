export const name="rows-plus-top-thin";
export const id="dl_4fef5ccaed5b4486b84c";
export const url=new URL("../icons/rows-plus-top-thin.svg?v=ae6cb32b63c1ab02d702e6c182afd84be4d770d491ee45adcc4872d1b598538b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
