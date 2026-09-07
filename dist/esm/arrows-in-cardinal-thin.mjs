export const name="arrows-in-cardinal-thin";
export const id="dl_e96978e13ab94346830a";
export const url=new URL("../icons/arrows-in-cardinal-thin.svg?v=b5409c6f50099a6eda22a0e807545d4fd888099e59b4e6eb88b1a220eadf3339",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
