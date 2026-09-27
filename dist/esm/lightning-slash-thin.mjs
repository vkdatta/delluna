export const name="lightning-slash-thin";
export const id="dl_5d70a186f70e466b950c";
export const url=new URL("../icons/lightning-slash-thin.svg?v=03f0ad9d0ca4a61b33663ffc36bbc148b1a8aa660d169f34757faef362255d3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
