export const name="bus-thin";
export const id="dl_2558ac40921645a8bfc5";
export const url=new URL("../icons/bus-thin.svg?v=fd9cfbf150145b327e6503d2467254d6ae87e4ed571b394ed5207bda31f187ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
