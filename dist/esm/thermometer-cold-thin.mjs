export const name="thermometer-cold-thin";
export const id="dl_e46f1cfdd811e385c82e";
export const url=new URL("../icons/thermometer-cold-thin.svg?v=759076f802d6f29a4f779a1edf3b8e3e003c3fa35f05f9f05dfc4279260285b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
