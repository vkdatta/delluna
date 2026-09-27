export const name="cowboy-hat-bold";
export const id="dl_5a18ba2bfa3542d085f4";
export const url=new URL("../icons/cowboy-hat-bold.svg?v=b87b05297fe97a7c8972ce3e4e215895cba4ebb412387290e00eba383ab7073d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
