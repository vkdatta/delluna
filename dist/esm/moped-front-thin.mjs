export const name="moped-front-thin";
export const id="dl_d63eed15e156498ea844";
export const url=new URL("../icons/moped-front-thin.svg?v=967ffa32925702952293e7229a1c36551d1ec2f3e526ae9e06feb1925971db41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
