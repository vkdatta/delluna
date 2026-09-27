export const name="home_work";
export const id="dl_d5b8de42f1e521dabca8";
export const url=new URL("../icons/home_work.svg?v=df920d402b2e48ce797f18c303a8e01c109b45db9c97335234d8fba4292da0ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
