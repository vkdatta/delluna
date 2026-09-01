export const name="bug_report";
export const id="dl_d0cdba03128b7e93f73f";
export const url=new URL('../icons/bug_report.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
