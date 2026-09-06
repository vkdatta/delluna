export const name="fire-simple-bold";
export const id="dl_af179ead28f04c3995f7";
export const url=new URL("../icons/fire-simple-bold.svg?v=8fc35ffbe211918f246317ac5d66673272dd43ffae4914251c0ea20e7ad4a150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
