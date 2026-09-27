export const name="train-regional-bold";
export const id="dl_406c92abacb5c02d5bb1";
export const url=new URL("../icons/train-regional-bold.svg?v=5a904b87079b23d9b1378b3faf791a59c201cf11408316888c2d884751f9937d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
