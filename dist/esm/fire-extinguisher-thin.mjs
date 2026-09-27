export const name="fire-extinguisher-thin";
export const id="dl_2cbf23acc5f04c049da0";
export const url=new URL("../icons/fire-extinguisher-thin.svg?v=8125377972d9dc99c11f98429dbdd925933dbe40002ad8573e89cc2544adcdb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
