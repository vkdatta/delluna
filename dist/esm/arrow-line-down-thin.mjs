export const name="arrow-line-down-thin";
export const id="dl_9205f9072b9e497fa356";
export const url=new URL("../icons/arrow-line-down-thin.svg?v=2a656aecadf0580826144cc709da5f174007b7cccfb04c97f7d3185e104f96cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
