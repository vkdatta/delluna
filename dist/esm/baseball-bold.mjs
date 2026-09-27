export const name="baseball-bold";
export const id="dl_5fbd2db381fb4b74a1cc";
export const url=new URL("../icons/baseball-bold.svg?v=fab736896ef022b648d44a6b040359b6a12a994b34962664550f906de0fbab54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
