export const name="brain-bold";
export const id="dl_27e449eb6ff1448ea752";
export const url=new URL("../icons/brain-bold.svg?v=b110bfeb42bd33419ac5e089b16ef85f565a53aa6af326e571ad7f44cb1ad458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
