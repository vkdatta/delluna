export const name="experiment";
export const id="dl_c192fb53934ad04a4ed9";
export const url=new URL("../icons/experiment.svg?v=ed661a11c782c9ab1d2e7faf0eb862c0b3febfc545cba32665e8efeb3deab906",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
