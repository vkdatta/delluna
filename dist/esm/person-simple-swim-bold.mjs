export const name="person-simple-swim-bold";
export const id="dl_b56006a5def845aea542";
export const url=new URL("../icons/person-simple-swim-bold.svg?v=d80abb90755a41672878dd1ece9870af291ae7d6f8991c2fc98a4cedfa158b1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
