export const name="arrow_cool_down";
export const id="dl_168366aee708110185e0";
export const url=new URL("../icons/arrow_cool_down.svg?v=bfff0070e466057b6bf7f181a4deea4e5bd53210b67ff8ccb6181ecd2212be00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
