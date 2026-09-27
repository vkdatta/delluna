export const name="smart_card_reader_off";
export const id="dl_b0dfe1c7071b99ecbcd8";
export const url=new URL("../icons/smart_card_reader_off.svg?v=1ea852033e9a3003250bba449a743bb636e14463407edc5ea9961081f27f63fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
