export const name="trailer";
export const id="dl_fdaab6a9be4142e59c9f";
export const url=new URL("../icons/trailer.svg?v=922076f60c294eb62f73c49f0b42df8bcd4b0d90cf42790c56d929005273a90d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
