export const name="currency-circle-dollar-bold";
export const id="dl_8b4889039aa4471ba979";
export const url=new URL("../icons/currency-circle-dollar-bold.svg?v=d4057b346a5e72562073222ec107525da7ec96bec9ce5eca56d7916a1fb2be9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
