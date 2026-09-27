export const name="office-chair-thin";
export const id="dl_d5ed9c251b6640528bde";
export const url=new URL("../icons/office-chair-thin.svg?v=756700e5b8965010d7bd99b08e3ca74cb5979a485565d85d3f0a76fd25ca2f85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
