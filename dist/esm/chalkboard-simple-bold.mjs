export const name="chalkboard-simple-bold";
export const id="dl_f0184edbe4734f579279";
export const url=new URL("../icons/chalkboard-simple-bold.svg?v=c3b04235843b3e3da1e3c80cecbc6d70d68e1021960ddb654ee8598962fb148f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
