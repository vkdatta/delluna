export const name="home_storage_gear-fill";
export const id="dl_145b15199e59ca4c50b7";
export const url=new URL("../icons/home_storage_gear-fill.svg?v=7acad7e5cb8339dc88afe25804fa84d31b24ad5c13205f930d68be2e590d5df4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
